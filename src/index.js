import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class ListRow extends React.Component {
  render() {
    const { color, labelColor } = this.props
    return (
      <View style={styles.container}>
        {this.props.LeftComponent}
        <View style={styles.infoContainer}>
          <View style={styles.headerContainer}>
            <Text numberOfLines={1} style={[styles.title, { color }]}>{this.props.title}</Text>
            <Text numberOfLines={1} style={[styles.label, { color }]}>{this.props.label}</Text>
          </View>
          <Text numberOfLines={1} style={[styles.description, { color: labelColor }]}>{this.props.description}</Text>
        </View>
      </View>
    )
  }
}

ListRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  labelColor: PropTypes.string,
  LeftComponent: PropTypes.element,
}

ListRow.defaultProps = {
  color: '#000',
  labelColor: '#a1a1a1',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  description: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    marginLeft: 'auto'
  },
})
