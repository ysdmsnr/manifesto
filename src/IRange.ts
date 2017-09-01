namespace Manifesto {
    export interface IRange extends IManifestResource {
        canvases: string[] | null;
        getCanvasIds(): string[];
        getRanges(): IRange[];
        getTree(treeRoot: ITreeNode): ITreeNode;
        getViewingDirection(): ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        members: IManifestResource[];
        parentRange: IRange | undefined;
        path: string;
        treeNode: ITreeNode;
    }
}