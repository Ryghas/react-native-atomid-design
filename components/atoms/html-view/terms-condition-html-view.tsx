import TableRenderer, {
  cssRulesFromSpecs,
  defaultTableStylesSpecs,
  tableModel,
} from '@native-html/table-plugin';
import React from 'react';
import {PixelRatio} from 'react-native';
import {RenderHTMLProps} from 'react-native-render-html';
import WebView from 'react-native-webview';

import {HtmlView} from './html-view';
import {webViewFont} from './webview-font';

interface Props extends RenderHTMLProps {
  fontSize?: number;
  textColor?: string;
}

export const TermsConditionHtmlView: React.FC<Props> = (props) => {
  return (
    <HtmlView
      WebView={WebView}
      renderers={{table: TableRenderer}}
      customHTMLElementModels={{table: tableModel}}
      renderersProps={{
        table: {
          cssRules: webviewForTableCssRules,
          webViewProps: {scrollEnabled: false},
        },
      }}
      {...props}
    />
  );
};

const evenRowBackground = '#F6F6F6';
const oddRowBackground = '#FFFFFF';

const webviewForTableCssRules =
  cssRulesFromSpecs(defaultTableStylesSpecs) +
  `
  ${webViewFont}

  * {
    font-family: 'Montserrat-Regular';
    font-size: ${PixelRatio.getFontScale() * 16}px;
    background-color: transparent;
  }

  table {
    width: 100%;
  }

  th, td {
    text-align: left;
  }

  tr:nth-of-type(odd) td {
    background-color: ${oddRowBackground};
  }
  
  tr:nth-of-type(even) td {
    background-color: ${evenRowBackground};
  }

  td {
    border-bottom: 0px;
    border-right: 0px;
    padding: 12px;
  }

  h3 {
    font-family: 'Montserrat-SemiBold';
    font-size: ${PixelRatio.getFontScale() * 16}px;
    padding: 0;
    margin: 0;
  }

  b {
    font-family: 'Montserrat-SemiBold';
  }
`;
