///
export interface LinkService {
    getDataLinkUIModel: (link: any, scopedVars: any, datapoint?: any) => any;
    getDataPointVars: (seriesName: string, dataPointTs: any) => any;
}

export declare class LinkSrv implements LinkService {
    getLinkUrl(link: any): string;
    getAnchorInfo(link: any): any;
    getDataPointVars(seriesName: string, valueTime: any): any;
    getDataLinkUIModel: (link: any, scopedVars: any, datapoint?: any) => any;
    getPanelLinkAnchorInfo(link: any, scopedVars: any): any;
}