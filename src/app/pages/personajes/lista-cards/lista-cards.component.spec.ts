import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardsComponent } from './lista-cards.component';

describe('ListaCardsComponent', () => {
  let component: ListaCardsComponent;
  let fixture: ComponentFixture<ListaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
