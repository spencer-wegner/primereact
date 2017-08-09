import React, { Component } from 'react';

export class ThemingPage extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Theming</h1>
                        <p>Create your own PrimeReact experience</p>
                    </div>
                </div>

                <div className="content-section documentation">
                    <h3 style={{marginTop:0}}>Structural CSS</h3>
                    <p>These style classes define the skeleton of the components and include css properties such as margin, padding, display type, dimensions and positioning.</p>

                    <h3>Skinning CSS</h3>
                    <p>Skinning defines the look and feel properties like colors, border colors, background images.</p>

                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                            <tr>
                                <th>Style Class</th>
                                <th>Applies</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>ui-widget</td>
                                <td>All PrimeReact components</td>
                            </tr>
                            <tr>
                                <td>ui-widget-header</td>
                                <td>Header section of a component</td>
                            </tr>
                            <tr>
                                <td>ui-widget-content</td>
                                <td>Content section of a component</td>
                            </tr>
                            <tr>
                                <td>ui-state-default</td>
                                <td>Default state of a clickable element</td>
                            </tr>
                            <tr>
                                <td>ui-state-hover</td>
                                <td>Hover state of a clickable element like mouse over</td>
                            </tr>
                            <tr>
                                <td>ui-state-active</td>
                                <td>Active state of a clickable element like mouse press</td>
                            </tr>
                            <tr>
                                <td>ui-state-highlight</td>
                                <td>Highlighed elements</td>
                            </tr>
                            <tr>
                                <td>ui-state-disabled</td>
                                <td>Disabled elements</td>
                            </tr>
                            <tr>
                                <td>fa</td>
                                <td>Icon elements based on font awesome</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>These classes are not aware of structural css like margins and paddings, mostly they only define colors. This clean separation brings great flexibility in theming because you don’t need to know each and every skinning selectors of components to change their style.</p>

                    <p>For example Panel component’s header section has the "ui-panel-titlebar" structural class, to change the color of a panel header you don’t need to about this class as "ui-widget-header" defines colors for panel header.</p>

                    <h3>Free Themes</h3>
                    <p>16 free themes are available for PrimeReact, these include the themeroller themes, twitter bootstrap theme and our custom themes. ThemeSwitcher on the top right section
                        of the page dynamically changes the theme at demo pages. Themes are distributed along with PrimeReact itself. In addition, <a href="https://jqueryui.com/themeroller/">online ThemeRoller</a> designer allows you to create a PrimeReact theme.</p>

                    <p>Font-size of free themes use em to define the font size of the widgets using .ui-widget class. This is 1em by default and it is suggested to define a base font-size at the body element of your application to adjust the size of
                        components.</p>

                    <h3>Premium Layouts and Themes</h3>
                    <p>PrimeReact also supports sass based, fully customizable.</p>

                </div>
            </div>
        );
    }
}