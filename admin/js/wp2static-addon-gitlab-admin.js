(function( $ ) {
	'use strict';

	$(function() {
    deploy_options['gitlab'] = {
        exportSteps: [
            'gitlab_prepare_export',
            'gitlab_upload_files',
            'finalize_deployment'
        ],
        required_fields: {
          ghToken: 'Please specify your GitLab personal access token in order to deploy to GitLab.',
          ghRepo: 'Please specify your GitLab repository name in order to deploy to GitLab.',
          ghBranch: 'Please specify which branch in your GitLab repository you want to deploy to.',
        },
        repo_field: {
          field: 'ghRepo',
          message: "Please ensure your GitLab repo is specified as USER_OR_ORG_NAME/REPO_NAME\n"
        }
    };

    status_descriptions['gitlab_prepare_export'] = 'Preparing files for GitLab deployment';
    status_descriptions['gitlab_upload_files'] = 'Deploying files via GitLab';
    status_descriptions['cloudfront_invalidate_all_items'] = 'Invalidating CloudFront cache';
  }); // end DOM ready

})( jQuery );
