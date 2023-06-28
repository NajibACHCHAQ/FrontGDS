import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauFournisseurComponent } from './page-nouveau-fournisseur.component';

describe('PageNouveauFournisseurComponent', () => {
  let component: PageNouveauFournisseurComponent;
  let fixture: ComponentFixture<PageNouveauFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNouveauFournisseurComponent]
    });
    fixture = TestBed.createComponent(PageNouveauFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
