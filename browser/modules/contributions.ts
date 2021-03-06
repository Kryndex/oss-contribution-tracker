/* Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { browserHistory } from 'react-router';
import { postJSON } from '../util/index';

export const CHANGE_MODAL = 'app/contributions/change-modal';
export const MODAL_STATUS = 'app/contributions/modal-status';

// Reducer for adding new contributions
let initial = {
};

export default function reducer(state = initial, action: any = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

/*** Action creators ***/
export function addContribution(contrib) {
  return dispatch => {
    return postJSON('/api/contributions/new', JSON.stringify(contrib))
      .then(() => {
        browserHistory.push('/');
      })
      .catch(error => console.log(error));
  };
}

export function approveContribution(contrib) {
  return dispatch => {
    return postJSON('/api/contributions/approve', JSON.stringify(contrib))
      .then(() => {
        browserHistory.push('/admin');
      })
      .catch(error => console.log(error));
  };
}

export function updateContribution(contrib) {
  return dispatch => {
    return postJSON('/api/contributions/update', JSON.stringify(contrib))
      .catch(error => console.log(error));
  };
}

export function addContributionAutoApproval(contrib) {
  return dispatch => {
    return postJSON('/api/contributions/newautoapproval', JSON.stringify(contrib))
    .catch(error => console.log(error));
  };
}