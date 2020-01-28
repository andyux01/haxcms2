const HAXCMS = require('../lib/HAXCMS.js');

/**
   * @OA\Post(
   *    path="/saveManifest",
   *    tags={"cms","authenticated"},
   *    @OA\Parameter(
   *         name="jwt",
   *         description="JSON Web token, obtain by using  /login",
   *         in="query",
   *         required=true,
   *         @OA\Schema(type="string")
   *    ),
   *    @OA\Response(
   *        response="200",
   *        description="Save the manifest of the site"
   *   )
   * )
   */
  async function saveManifest(req, res) {
    // load the site from name
    site = HAXCMS.loadSite(req.query['site']['name']);
    // standard form submit
    // @todo 
    // make the form point to a form submission endpoint with appropriate name
    // add a hidden field to the output that always has the haxcms_form_id as well
    // as a dynamically generated Request token relative to the name of the
    // form
    // pull the form schema for the form itself internally
    // ensure ONLY the things that appear in that schema get set
    // if something DID NOT COME ACROSS, don't unset it, only set what shows up
    // if something DID COME ACROSS WE DIDN'T SET, kill the transaction (xss)

    // - snag the form
    // @todo see if we can dynamically save the valus in the same format we loaded
    // the original form in. This would involve removing the vast majority of
    // what's below
    /*if (HAXCMS.validateRequestToken(null, 'form')) {
      let context = {
        'site' : [],
        'node' : [],
      };
      if ((req.query['site'])) {
        context['site'] = req.query['site'];
      }
      if ((req.query['node'])) {
        context['node'] = req.query['node'];
      }
      form = HAXCMS.loadForm(req.query['haxcms_form_id'], context);
    }*/
    if (HAXCMS.validateRequestToken(req.query['haxcms_form_token'], req.query['haxcms_form_id'])) {
      site.manifest.title = req.query['manifest']['site']['manifest-title'].replace(/<\/?[^>]+(>|$)/g, "");
      site.manifest.description = req.query['manifest']['site']['manifest-description'].replace(/<\/?[^>]+(>|$)/g, "");
      // store some version data here just so we can find it later
      site.manifest.metadata.site.version = HAXCMS.getHAXCMSVersion();
      site.manifest.metadata.site.domain = filter_var(
          req.query['manifest']['site']['manifest-metadata-site-domain'],
          FILTER_SANITIZE_STRING
      );
      site.manifest.metadata.site.logo = filter_var(
          req.query['manifest']['site']['manifest-metadata-site-logo'],
          FILTER_SANITIZE_STRING
      );
      if (!(site.manifest.metadata.site.static)) {
        site.manifest.metadata.site.static = {};
      }
      site.manifest.metadata.site.static.cdn = filter_var(
          req.query['manifest']['static']['manifest-metadata-site-static-cdn'],
          FILTER_SANITIZE_STRING
      );
      site.manifest.metadata.site.static.offline = filter_var(
          req.query['manifest']['static']['manifest-metadata-site-static-offline'],
          FILTER_VALIDATE_BOOLEAN
      );
      if ((req.query['manifest']['site']['manifest-domain'])) {
          domain = filter_var(
              req.query['manifest']['site']['manifest-domain'],
              FILTER_SANITIZE_STRING
          );
          // support updating the domain CNAME value
          if (site.manifest.metadata.site.domain != domain) {
              site.manifest.metadata.site.domain = domain;
              fs.writeFile(
                  site.directory +
                      '/' +
                      site.manifest.site.name +
                      '/CNAME',
                  domain
              );
          }
      }
      // look for a match so we can set the correct data
      foreach (HAXCMS.getThemes() as key : theme) {
        if (
            filter_var(req.query['manifest']['theme']['manifest-metadata-theme-element'], FILTER_SANITIZE_STRING) ==
            key
        ) {
            site.manifest.metadata.theme = theme;
        }
      }
      if (!(site.manifest.metadata.theme.variables)) {
        site.manifest.metadata.theme.variables = {};
      }
      site.manifest.metadata.theme.variables.image = filter_var(
          req.query['manifest']['theme']['manifest-metadata-theme-variables-image'],FILTER_SANITIZE_STRING
      );
      if ((req.query['manifest']['theme']['manifest-metadata-theme-variables-hexCode'])) {
        site.manifest.metadata.theme.variables.hexCode = filter_var(
          req.query['manifest']['theme']['manifest-metadata-theme-variables-hexCode'],FILTER_SANITIZE_STRING
        );
      }
      site.manifest.metadata.theme.variables.cssVariable = "--simple-colors-default-theme-" + filter_var(
        req.query['manifest']['theme']['manifest-metadata-theme-variables-cssVariable'], FILTER_SANITIZE_STRING
      ). "-7";
      site.manifest.metadata.theme.variables.icon = filter_var(
        req.query['manifest']['theme']['manifest-metadata-theme-variables-icon'],FILTER_SANITIZE_STRING
      );
      if ((req.query['manifest']['author']['manifest-license'])) {
          site.manifest.license = filter_var(
              req.query['manifest']['author']['manifest-license'],
              FILTER_SANITIZE_STRING
          );
          if (!(site.manifest.metadata.author)) {
            site.manifest.metadata.author = {};
          }
          site.manifest.metadata.author.image = filter_var(
              req.query['manifest']['author']['manifest-metadata-author-image'],
              FILTER_SANITIZE_STRING
          );
          site.manifest.metadata.author.name = filter_var(
              req.query['manifest']['author']['manifest-metadata-author-name'],
              FILTER_SANITIZE_STRING
          );
          site.manifest.metadata.author.email = filter_var(
              req.query['manifest']['author']['manifest-metadata-author-email'],
              FILTER_SANITIZE_STRING
          );
          site.manifest.metadata.author.socialLink = filter_var(
              req.query['manifest']['author']['manifest-metadata-author-socialLink'],
              FILTER_SANITIZE_STRING
          );
      }
      if ((req.query['manifest']['seo']['manifest-metadata-site-settings-pathauto'])) {
          site.manifest.metadata.site.settings.pathauto = filter_var(
          req.query['manifest']['seo']['manifest-metadata-site-settings-pathauto'],
          FILTER_VALIDATE_BOOLEAN
          );
      }
      if ((req.query['manifest']['seo']['manifest-metadata-site-settings-publishPagesOn'])) {
        site.manifest.metadata.site.settings.publishPagesOn = filter_var(
        req.query['manifest']['seo']['manifest-metadata-site-settings-publishPagesOn'],
        FILTER_VALIDATE_BOOLEAN
        );
      }
      if ((req.query['manifest']['seo']['manifest-metadata-site-settings-sw'])) {
        site.manifest.metadata.site.settings.sw = filter_var(
        req.query['manifest']['seo']['manifest-metadata-site-settings-sw'],
        FILTER_VALIDATE_BOOLEAN
        );
      }
      if ((req.query['manifest']['seo']['manifest-metadata-site-settings-forceUpgrade'])) {
        site.manifest.metadata.site.settings.forceUpgrade = filter_var(
        req.query['manifest']['seo']['manifest-metadata-site-settings-forceUpgrade'],
        FILTER_VALIDATE_BOOLEAN
        );
      }
      // more importantly, this is where the field UI stuff is...
      if ((req.query['manifest']['fields']['manifest-metadata-node-fields'])) {
          fields = [];
          // establish a fields block, replacing with whatever is there now
          site.manifest.metadata.node.fields = {};
          for (var key in req.query['manifest']['fields']['manifest-metadata-node-fields']) {
            let field = req.query['manifest']['fields']['manifest-metadata-node-fields'][key];
            fields.push(field);
          }
          if (fields.length > 0) {
              site.manifest.metadata.node.fields = fields;
          }
      }
      site.manifest.metadata.site.git.autoPush = filter_var(
        req.query['manifest']['git']['manifest-metadata-site-git-autoPush'],
        FILTER_VALIDATE_BOOLEAN
      );
      site.manifest.metadata.site.git.branch = filter_var(
        req.query['manifest']['git']['manifest-metadata-site-git-branch'],
        FILTER_SANITIZE_STRING
      );
      site.manifest.metadata.site.git.staticBranch = filter_var(
        req.query['manifest']['git']['manifest-metadata-site-git-staticBranch'],
        FILTER_SANITIZE_STRING
      );
      site.manifest.metadata.site.git.vendor = filter_var(
        req.query['manifest']['git']['manifest-metadata-site-git-vendor'],
        FILTER_SANITIZE_STRING
      );
      site.manifest.metadata.site.git.publicRepoUrl = filter_var(
        req.query['manifest']['git']['manifest-metadata-site-git-publicRepoUrl'],
        FILTER_SANITIZE_STRING
      );
      site.manifest.metadata.site.updated = Date.now();
      // don't reorganize the structure
      site.manifest.save(false);
      site.gitCommit('Manifest updated');
      // rebuild the files that twig processes
      site.rebuildManagedFiles();
      site.gitCommit('Managed files updated');
      // check git remote if it came across as a possible setting
      if ((req.query['manifest']['git']['manifest-metadata-site-git-url'])) {
        if (
          filter_var(req.query['manifest']['git']['manifest-metadata-site-git-url'], FILTER_SANITIZE_STRING) &&
          (!(site.manifest.metadata.site.git.url) ||
            site.manifest.metadata.site.git.url !=
              filter_var(
                req.query['manifest']['git']['manifest-metadata-site-git-url'],
                FILTER_SANITIZE_STRING
              ))
        ) {
          site.gitSetRemote(
              filter_var(req.query['manifest']['git']['manifest-metadata-site-git-url'], FILTER_SANITIZE_STRING)
          );
        }
        site.manifest.metadata.site.git.url =
        filter_var(
          req.query['manifest']['git']['manifest-metadata-site-git-url'],
          FILTER_SANITIZE_STRING
        );
        site.manifest.save(false);
        site.gitCommit('origin updated');
      }
      return site.manifest;
    }
    else {
        res.send(403);
    }
  }
  module.exports = saveManifest;