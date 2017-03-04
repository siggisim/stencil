import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

import { RootComponent } from "./root";

describe("RootComponent", () => {

    let fixture: ComponentFixture<RootComponent>;

    beforeEach(async(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
        TestBed.configureTestingModule({
                declarations: [RootComponent]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(RootComponent);
            });
    }));

    it("should display title", () => {
        let debugElement = fixture.debugElement.query(By.css("h1"));
        fixture.detectChanges();
        expect(debugElement.nativeElement.textContent).toEqual("Stencil");
    });
});