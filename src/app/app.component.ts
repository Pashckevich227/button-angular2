import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app"
  isLoading = false
  status = "Загрузить данные с сервера"
  isShowResetButton = false

  resetData = () => {
    this.status = "Загрузить данные с сервера"
    this.isShowResetButton = false
  }

  toggleLoading = () => {
    this.isLoading = true
    this.status = "Загрузка данных"

    setTimeout(() => {
      this.isLoading = false
      this.status = "Данные загружены!"
      this.isShowResetButton = true
    }, 3000);
  };
}
