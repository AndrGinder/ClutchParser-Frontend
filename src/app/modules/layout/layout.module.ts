import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationComponent } from "src/app/components/pagination/pagination.component";
import { LayoutRoutingModule } from "./layout.routing-module";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { LocationBarComponent } from "src/app/modules/company/components/location-bar/location-bar.component";

@NgModule({
    declarations: [
        PaginationComponent,
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    exports: [
        PaginationComponent,
        NavbarComponent,
    ],
})
export class LayoutModule {}