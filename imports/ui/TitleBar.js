import React from 'react';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h3>{this.props.subtitle}</h3>;
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Default title'
};
