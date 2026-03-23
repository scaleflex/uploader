export interface SecurityTemplateAuth {
    mode: 'security-template';
    container: string;
    securityTemplateId: string;
    airboxPuid?: string;
}
export interface SassKeyAuth {
    mode: 'sass-key';
    container: string;
    sassKey: string;
    airboxPuid?: string;
}
export interface SessionAuth {
    mode: 'session';
    container: string;
    sessionToken: string;
    companyToken?: string;
    projectToken?: string;
    airboxPuid?: string;
}
export type AuthConfig = SecurityTemplateAuth | SassKeyAuth | SessionAuth;
/** Headers to attach to every Scaleflex API request. */
export type AuthHeaders = Record<string, string>;
//# sourceMappingURL=auth.types.d.ts.map