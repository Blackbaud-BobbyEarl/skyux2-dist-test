import { AfterContentChecked, AfterViewInit, ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MutationObserverService } from '../mutation/mutation-observer-service';
export declare class SkyTextHighlightDirective implements OnChanges, AfterViewInit, AfterContentChecked, OnDestroy {
    private el;
    private observerService;
    skyHighlight: string;
    private existingHighlight;
    private observer;
    private static getRegexMatch(node, searchText);
    private static markNode(node, searchText);
    private static markTextNodes(node, searchText);
    private static removeHighlight(el);
    constructor(el: ElementRef, observerService: MutationObserverService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    private readyForHighlight(searchText);
    private highlight();
    private observeDom();
}
