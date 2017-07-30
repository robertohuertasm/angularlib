/* tslint:disable:no-unused-variable */
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TemplateComponent } from '../../src/components';

describe('Template Component', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TemplateComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    // fixture.autoDetectChanges(true);
    // fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });

  it('test', () => {
    expect(true).toBeTruthy();
  })

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('calling `detectChanges` makes default value to be shown', () => {
    fixture.detectChanges();
    expect(el.textContent).toEqual('I\'m the template component');
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
