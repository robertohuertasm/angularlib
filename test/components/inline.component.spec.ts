/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InlineComponent } from '../../src/components';

describe('Inline Component', () => {
  let component: InlineComponent;
  let fixture: ComponentFixture<InlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InlineComponent,
      ],
    });
    fixture = TestBed.createComponent(InlineComponent);
    component = fixture.componentInstance;
    // fixture.autoDetectChanges(true);
    // fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('calling `detectChanges` makes default value to be shown', () => {
    fixture.detectChanges();
    expect(el.textContent).toEqual('I\'m the inline component');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toEqual(component.title);
  });

  it('should display an empty title', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display a title', () => {
    component.title = 'aaa';
    fixture.detectChanges();
    expect(el.textContent).toEqual('aaa');
  });
});
