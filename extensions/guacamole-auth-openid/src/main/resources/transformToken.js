/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Before AngularJS routing takes effect, test whether the URL fragment
 * contains an OpenID Connect "id_token" parameter, and reformat the fragment
 * such that the client side of Guacamole's authentication system will
 * automatically forward the "id_token" value for server-side validation.
 * 
 * Note that not all OpenID identity providers will include the "id_token"
 * parameter in the first position; it may occur after several other parameters
 * within the hash.
 */
(function guacOpenIDTransformToken() {

    // Transform "/#id_token=..." to "/#/?id_token=..."
    if (/(^#|&)id_token=/.test(location.hash))
        location.hash = '/?' + location.hash.substring(1);

})();
