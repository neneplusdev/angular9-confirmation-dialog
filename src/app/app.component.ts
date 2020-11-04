import { Component } from '@angular/core';
import { ConfirmationDialogService } from './component/shared/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  action: String = null;
  public openConfirmationDialog() {
    this.action = null;
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => {
      
      this.action = confirmed ? "User confirmed." : "User cancelled."
    })
    .catch(() => {
      this.action = "User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)."
    });
  }
}
