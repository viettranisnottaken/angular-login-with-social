import { environment } from 'src/environments/environment';
import { AuthService } from './credentials/auth.service';

declare const FB: any;

export function appInitializer(authService: AuthService) {
  return () =>
    new Promise((resolve: any) => {
      (window as any)['fbAsyncInit'] = function () {
        FB.init({
          appId: environment.fbAppId,
          cookie: true,
          xfbml: true,
          version: 'v8.0',
        });

        FB.getLoginStatus(({}) => {
          // if (false) {
          //   authService.apiAuthenticate(authResponse.accessToken)
          //         .subscribe()
          //         .add(resolve);
          // } else {
          // }
          resolve();
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        (js as any).src = 'https://connect.facebook.net/en_US/sdk.js';
        (fjs as any).parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    });
}
