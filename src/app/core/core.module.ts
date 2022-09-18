import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [CommonModule, MenubarModule, InputTextModule],
})
export class CoreModule {}
