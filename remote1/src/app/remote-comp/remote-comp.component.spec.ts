import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteCompComponent } from './remote-comp.component';

describe('RemoteCompComponent', () => {
  let component: RemoteCompComponent;
  let fixture: ComponentFixture<RemoteCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
