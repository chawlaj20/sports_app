import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListsComponent } from './teams-lists.component';

describe('TeamsListsComponent', () => {
  let component: TeamsListsComponent;
  let fixture: ComponentFixture<TeamsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
