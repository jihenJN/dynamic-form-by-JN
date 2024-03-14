import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiGeneratorComponent } from './gui-generator.component';

describe('GuiGeneratorComponent', () => {
  let component: GuiGeneratorComponent;
  let fixture: ComponentFixture<GuiGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
