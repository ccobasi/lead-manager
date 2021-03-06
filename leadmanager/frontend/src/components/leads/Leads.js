import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
      };

      componentDidMount() {
        this.props.getLeads();
      }

    render() {
        return (
            <div>
                <h1>Add Lead List</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    leads: state.leads.leads,
  });

export default connect(mapStateToProps, { getLeads })(Leads);