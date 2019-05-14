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
          glToken: 'Please specify your GitLab personal access token in order to deploy to GitLab.',
          glProject: 'Please specify your GitLab project ID in order to deploy to GitLab.',
          glBranch: 'Please specify which branch in your GitLab repository you want to deploy to.'
        }
    };

    status_descriptions['gitlab_prepare_export'] = 'Preparing files for GitLab deployment';
    status_descriptions['gitlab_upload_files'] = 'Deploying files to GitLab';
  }); // end DOM ready

})( jQuery );
