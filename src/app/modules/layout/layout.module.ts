import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationComponent } from "src/app/components/pagination/pagination.component";
import { LayoutRoutingModule } from "./layout.routing-module";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { LocationBarComponent } from "src/app/components/location-bar/location-bar.component";

@NgModule({
    declarations: [
        PaginationComponent,
        NavbarComponent,
        LocationBarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    exports: [
        PaginationComponent,
        NavbarComponent,
        LocationBarComponent
    ],
})
export class LayoutModule {}