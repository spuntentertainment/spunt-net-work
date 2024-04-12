import React from 'react'
import * as Browser from 'expo-web-browser'

import {
  buildOAuthUrl,
  DPOP_BOUND_ACCESS_TOKENS,
  OAUTH_APPLICATION_TYPE,
  OAUTH_CLIENT_ID,
  OAUTH_GRANT_TYPES,
  OAUTH_REDIRECT_URI,
  OAUTH_RESPONSE_TYPES,
  OAUTH_SCOPE,
} from 'lib/oauth'
import {RNOAuthClientFactory} from '../../../../modules/expo-bluesky-oauth-client'

// Service URL here is just a placeholder, this isn't how it will actually work
export function useLogin(serviceUrl: string | undefined) {
  const openAuthSession = React.useCallback(async () => {
    const oauthFactory = new RNOAuthClientFactory({
      clientMetadata: {
        client_id: OAUTH_CLIENT_ID,
        redirect_uris: [OAUTH_REDIRECT_URI],
        grant_types: OAUTH_GRANT_TYPES,
        response_types: OAUTH_RESPONSE_TYPES,
        scope: OAUTH_SCOPE,
        dpop_bound_access_tokens: DPOP_BOUND_ACCESS_TOKENS,
        application_type: OAUTH_APPLICATION_TYPE,
      },
      fetch: global.fetch,
    })

    const res = await oauthFactory.signIn('http://localhost:2583/')
    console.log(res)

    return

    if (!serviceUrl) return

    const url = buildOAuthUrl(serviceUrl, '123') // TODO replace '123' with the appropriate state

    const authSession = await Browser.openAuthSessionAsync(
      url, // This isn't actually how this will work
      OAUTH_REDIRECT_URI, // Replace this as well with the appropriate link
    )

    if (authSession.type !== 'success') {
      return
    }
  }, [serviceUrl])

  return {
    openAuthSession,
  }
}
