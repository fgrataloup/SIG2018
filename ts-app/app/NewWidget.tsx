/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-hello-world",
  emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.NewWidget")
class NewWidget extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  firstValue
  //----------------------------------

  @property()
  @renderable()
  firstValue: string = "Super";

  //----------------------------------
  //  lastValue
  //----------------------------------

  @property()
  @renderable()
  lastValue: string = "Widget";

  //----------------------------------
  //  emphasized
  //----------------------------------

  @property()
  @renderable()
  emphasized: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------


  render() {
    const greeting = this._getGreeting();
    const classes = {
      [CSS.emphasis]: this.emphasized
    };

    return (
      <div class={this.classes(CSS.base, classes)}>
        {greeting}
      </div>
      );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getGreeting(): string {
    return `This is a new ${this.firstValue} ${this.lastValue}!`;
  }

}

export = NewWidget;