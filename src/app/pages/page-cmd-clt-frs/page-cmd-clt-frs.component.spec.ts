import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdCltFrsComponent } from './page-cmd-clt-frs.component';

describe('PageCmdCltFrsComponent', () => {
  let component: PageCmdCltFrsComponent;
  let fixture: ComponentFixture<PageCmdCltFrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCmdCltFrsComponent]
    });
    fixture = TestBed.createComponent(PageCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
