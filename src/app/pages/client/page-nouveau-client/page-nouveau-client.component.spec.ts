import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauClientComponent } from './page-nouveau-client.component';

describe('PageNouveauClientComponent', () => {
  let component: PageNouveauClientComponent;
  let fixture: ComponentFixture<PageNouveauClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNouveauClientComponent]
    });
    fixture = TestBed.createComponent(PageNouveauClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
