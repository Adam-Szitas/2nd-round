import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent{
  @Input()
  public details!: any;

  @Output()
  public buttonClicked = new EventEmitter<any>();

  public click(): void{
    this.buttonClicked.emit();
  }
}
