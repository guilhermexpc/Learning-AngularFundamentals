import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNGifComponent } from './diretiva-ngif.component';

describe('DiretivaNGifComponent', () => {
  let component: DiretivaNGifComponent;
  let fixture: ComponentFixture<DiretivaNGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
