export class LayoutConfig {
  public defaults = {
    layout: 'default',
    mode: 'full-width', // 'boxed', 'full-width', 'framed'
    theme: 'semidark',
    themeColor: '',
    navigationStyle: 'default', // 'default', 'folded', 'drawer'
    navigationFixed: true, // true, false
    activeNavDrawer: false, // true, false
    headerFixed: true, // true, false,
    customScrollbars: true
  };

  public get configs() {
    return this.defaults;
  }
}
