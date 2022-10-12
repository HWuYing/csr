import { HttpClient } from '@fm/shared';
import { Observable } from 'rxjs';
export interface StaticAssets {
    script: string[];
    js: string[];
    links: string[];
    fetchCacheData: {
        [url: string]: any;
    };
}
export declare class LoadAssets {
    private http;
    private options;
    private cacheServerData;
    constructor(http: HttpClient, options?: any);
    private initialCacheServerData;
    private parseStatic;
    private reeadLinkToStyles;
    private readJavascript;
    private createMicroTag;
    readMicroStatic(microName: string): Observable<any>;
}
