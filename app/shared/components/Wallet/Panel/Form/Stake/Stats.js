// @flow
import React, { Component } from 'react';
import { translate } from 'react-i18next';

import { Header, Segment } from 'semantic-ui-react';

class WalletPanelFormStakeStats extends Component<Props> {
  render() {
    const {
      cpuOriginal,
      RIXbalance,
      netOriginal,
      t
    } = this.props;

    return (
      <Segment.Group horizontal>
        <Segment>
          <Header textAlign="center">
            {(RIXbalance).toFixed(4)} RIX
            <Header.Subheader>
              {t('amount_not_staked')}
            </Header.Subheader>
          </Header>
        </Segment>
        <Segment>
          <Header textAlign="center">
            {cpuOriginal.toFixed(4)} RIX
            <Header.Subheader>
              {t('cpu_staked')}
            </Header.Subheader>
          </Header>
        </Segment>
        <Segment>
          <Header textAlign="center">
            {netOriginal.toFixed(4)} RIX
            <Header.Subheader>
              {t('net_staked')}
            </Header.Subheader>
          </Header>
        </Segment>
      </Segment.Group>
    );
  }
}

export default translate('stake')(WalletPanelFormStakeStats);
