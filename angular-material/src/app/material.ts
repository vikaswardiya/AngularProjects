//import {  MatCheckbox } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
    imports: [MatTableModule, MatSortModule, MatSidenavModule ,MatGridListModule],
    exports: [MatTableModule, MatSortModule, MatSidenavModule ,MatGridListModule]
})

export class MaterialModule { }