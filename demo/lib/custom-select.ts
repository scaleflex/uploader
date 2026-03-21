/**
 * Upgrades all <select> elements inside `.form-group` containers
 * into custom-styled dropdowns that match the UI kit.
 *
 * Call `initCustomSelects()` after the page HTML is rendered.
 * Returns a cleanup function that removes global listeners.
 */
export function initCustomSelects(): () => void {
  const selects = document.querySelectorAll<HTMLSelectElement>('.form-group select');

  const wrappers: HTMLElement[] = [];

  selects.forEach((select) => {
    const parent = select.parentElement!;

    // Build options data from the native select
    const options = Array.from(select.options).map((opt) => ({
      value: opt.value,
      label: opt.textContent || '',
      selected: opt.selected,
    }));

    const selectedOpt = options.find((o) => o.selected) || options[0];

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select';

    // Trigger button
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-select-trigger';
    trigger.innerHTML = `<span class="custom-select-value">${selectedOpt.label}</span><svg class="custom-select-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

    // Dropdown panel
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-select-dropdown';

    options.forEach((opt) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'custom-select-option' + (opt.selected ? ' selected' : '');
      item.dataset.value = opt.value;
      item.textContent = opt.label;
      dropdown.appendChild(item);
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(dropdown);

    // Hide native select but keep it in DOM for value/events
    select.style.display = 'none';
    parent.appendChild(wrapper);

    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close all other dropdowns first
      document.querySelectorAll('.custom-select.open').forEach((el) => {
        if (el !== wrapper) el.classList.remove('open');
      });
      wrapper.classList.toggle('open');
    });

    // Option click
    dropdown.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.custom-select-option') as HTMLElement | null;
      if (!target) return;

      const value = target.dataset.value || '';

      // Update native select (triggers change event)
      select.value = value;
      select.dispatchEvent(new Event('change', { bubbles: true }));

      // Update UI
      const valueEl = trigger.querySelector('.custom-select-value')!;
      valueEl.textContent = target.textContent;

      dropdown.querySelectorAll('.custom-select-option').forEach((el) => el.classList.remove('selected'));
      target.classList.add('selected');

      wrapper.classList.remove('open');
    });

    wrappers.push(wrapper);
  });

  // Close on outside click
  const onDocClick = () => {
    document.querySelectorAll('.custom-select.open').forEach((el) => el.classList.remove('open'));
  };
  document.addEventListener('click', onDocClick);

  return () => {
    document.removeEventListener('click', onDocClick);
  };
}
