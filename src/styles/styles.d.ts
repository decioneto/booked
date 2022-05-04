import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      bodyText: string,
      titleText: string,
      backgroundColor: string,
      CardBgColor: string
    }
  }
}