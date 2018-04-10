
const data = {
  list: [
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1521575057,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UMaLnmWDCVkB',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/zh_subtitles/file'
      },
      'uid': 'UMaLnmWDCVkB',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'QA - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Mar 20 19:44:17 2018',
      'image_uid': 'IAsevW4eJKeG',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMaLnmWDCVkB/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IAsevW4eJKeG-AA7iHdvPEAPz-0s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1518561569,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UEROMMCBLX1X',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/zh_subtitles/file'
      },
      'uid': 'UEROMMCBLX1X',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'QA - Live 2.0 Standard - Subclip copy - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Feb 13 22:39:29 2018',
      'image_uid': 'IjMgpGDg224p',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEROMMCBLX1X/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IjMgpGDg224p-AMme48vhu4gi-4.4389428s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1516909687,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UNKJoEkFV1lM',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/zh_subtitles/file'
      },
      'uid': 'UNKJoEkFV1lM',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'QA - Live 2.0 Standard - Subclip copy',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Jan 25 19:48:07 2018',
      'image_uid': 'I0nSJib7PG0y',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UNKJoEkFV1lM/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I0nSJib7PG0y-AFjwA6m5a6Sm-18.0s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1516901269,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UqMkPASh5kDz',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/zh_subtitles/file'
      },
      'uid': 'UqMkPASh5kDz',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'AaDeGOLstPI2-Clip8.movSubclip.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Jan 25 17:27:49 2018',
      'image_uid': 'IOz7gBN6Uf4C',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqMkPASh5kDz/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IOz7gBN6Uf4C-A0TM5n0FSWYX-3.003003s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1516130884,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UDdHfP7p1V0z',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/zh_subtitles/file'
      },
      'uid': 'UDdHfP7p1V0z',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'AaDeGOLstPI2-Clip8.movSubclip.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Jan 16 19:28:04 2018',
      'image_uid': 'IRwWUqaeLX1E',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDdHfP7p1V0z/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IRwWUqaeLX1E-AwuWdVV9wTng-3.003003s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1516130851,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UXzkzjdLI7al',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/zh_subtitles/file'
      },
      'uid': 'UXzkzjdLI7al',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': '974-122811-Sierra-Nevada-Lanjaron-Alpujarra-4.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Jan 16 19:27:31 2018',
      'image_uid': 'IKhWbfofMHFw',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UXzkzjdLI7al/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IKhWbfofMHFw-AJVdYhIOKcrj-2.46913566667s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1516130841,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U1I7hohE3E4u',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/zh_subtitles/file'
      },
      'uid': 'U1I7hohE3E4u',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': '10009-12-v2.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Jan 16 19:27:21 2018',
      'image_uid': 'IHkDWuaxDkol',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U1I7hohE3E4u/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IHkDWuaxDkol-AfWdY3t9L1Xa-4.22644433333s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1513780062,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UQBfqZGUIYuT',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/zh_subtitles/file'
      },
      'uid': 'UQBfqZGUIYuT',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Secure Adaptive Playlist 3 - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Dec 20 14:27:42 2017',
      'image_uid': 'I2UiNjPuqEMo',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQBfqZGUIYuT/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I2UiNjPuqEMo-ARmmdW495puK-8.33333333333s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1513780007,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U86Dgrdg8zjL',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/zh_subtitles/file'
      },
      'uid': 'U86Dgrdg8zjL',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Secure Adaptive Playlist 2 - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Dec 20 14:26:47 2017',
      'image_uid': 'Ibu3GFw6RBPo',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U86Dgrdg8zjL/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Ibu3GFw6RBPo-AH6CsBwZdjp7-6.67334s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1513779973,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U8t4eWKkX4DG',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/zh_subtitles/file'
      },
      'uid': 'U8t4eWKkX4DG',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Secure Adaptive Playlist 1 - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Dec 20 14:26:13 2017',
      'image_uid': 'IFzRsM2zmsHR',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U8t4eWKkX4DG/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IFzRsM2zmsHR-AGlBK47bCgRt-5.005005s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1513779850,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UbZWudLczEik',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/zh_subtitles/file'
      },
      'uid': 'UbZWudLczEik',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Secure adaptive - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Dec 20 14:24:10 2017',
      'image_uid': 'I7ysul6AQuhB',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UbZWudLczEik/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I7ysul6AQuhB-AG5MTPrmGQLI-10.01001s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1513779793,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UVk04gF3Stpl',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/zh_subtitles/file'
      },
      'uid': 'UVk04gF3Stpl',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Adaptive - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Dec 20 14:23:13 2017',
      'image_uid': 'IzpgD83ZISzX',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVk04gF3Stpl/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IzpgD83ZISzX-AynQgCYVKHS4-6.67333333333s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1512597257,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UB60IxCrY2Zy',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/zh_subtitles/file'
      },
      'uid': 'UB60IxCrY2Zy',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Clip #3.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Dec  6 21:54:17 2017',
      'image_uid': 'I8t7n1yhmeYq',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UB60IxCrY2Zy/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I8t7n1yhmeYq-AqGiXkbrA3UG-51s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/production_notes/file'
      },
      'description': 'edited!!!',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1512421088,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UvhMe6uUQHMG',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/zh_subtitles/file'
      },
      'uid': 'UvhMe6uUQHMG',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ricardo-test-tiny.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Mon Dec  4 20:58:08 2017',
      'image_uid': 'IZI8AByRDnlz',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvhMe6uUQHMG/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IZI8AByRDnlz-tiny-thumb.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1512063595,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UeYWk1xb6s63',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/zh_subtitles/file'
      },
      'uid': 'UeYWk1xb6s63',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'test',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Nov 30 17:39:55 2017',
      'image_uid': 'IeLFxutVzy2o',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UeYWk1xb6s63/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IeLFxutVzy2o-A5Tk1Z0M29zW-1.001s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1510351489,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UVFwAjWANZPu',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/zh_subtitles/file'
      },
      'uid': 'UVFwAjWANZPu',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Clip #3.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Fri Nov 10 22:04:49 2017',
      'image_uid': 'I00kieTx8tRq',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UVFwAjWANZPu/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I00kieTx8tRq-A1TM2IgsIPk0-20.353687s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1507669956,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UxhXqZPynuoV',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/zh_subtitles/file'
      },
      'uid': 'UxhXqZPynuoV',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ricardo-test-medium.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Oct 10 21:12:36 2017',
      'image_uid': 'IY3QosmUSX5x',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UxhXqZPynuoV/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IY3QosmUSX5x-ABNfq5xsDP87-80.399695s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1507669548,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UqJogpa3kA49',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/zh_subtitles/file'
      },
      'uid': 'UqJogpa3kA49',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'audio_no_image.mp3',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Oct 10 21:05:48 2017',
      'image_uid': 'IEybKIaz39gT',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UqJogpa3kA49/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IEybKIaz39gT-AEWIzeioqovX-0.0s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1507669491,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UDKZwNR4drSN',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/zh_subtitles/file'
      },
      'uid': 'UDKZwNR4drSN',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'audio_with_image.mp3',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Oct 10 21:04:51 2017',
      'image_uid': 'Imfcwyc5VTEu',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UDKZwNR4drSN/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Imfcwyc5VTEu-AtdVO4i83jXR-0.0s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1507669299,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U2XB0po4MQPt',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/zh_subtitles/file'
      },
      'uid': 'U2XB0po4MQPt',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'audio_with_image-png.mp3',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Oct 10 21:01:39 2017',
      'image_uid': 'IeIy6aX5jHjA',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U2XB0po4MQPt/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IeIy6aX5jHjA-AanW0i7Xelng-0.0s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/production_notes/file'
      },
      'description': 'ok',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1507300717,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UCqynfaDtjcl',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/zh_subtitles/file'
      },
      'uid': 'UCqynfaDtjcl',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': '😹',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Fri Oct  6 14:38:37 2017',
      'image_uid': 'IZTvMvHULDzx',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UCqynfaDtjcl/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IZTvMvHULDzx-hidden-tiger.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1507235458,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UN2qL5yZyJK0',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/zh_subtitles/file'
      },
      'uid': 'UN2qL5yZyJK0',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'audio_with_image.mp3',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Oct  5 20:30:58 2017',
      'image_uid': 'IiTboUkuHvMJ',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UN2qL5yZyJK0/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IiTboUkuHvMJ.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1507134497,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UZpQaHGByJoI',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/zh_subtitles/file'
      },
      'uid': 'UZpQaHGByJoI',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ricardo-sesame-street-small.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Oct  4 16:28:17 2017',
      'image_uid': 'I9q00XWiewSB',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZpQaHGByJoI/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I9q00XWiewSB-Aj8TvummsGUW-110.0s.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1506624039,
      'youtube_id': 'ytQ5CYE1VZw',
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U4U3sY65xEsr',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/zh_subtitles/file'
      },
      'uid': 'U4U3sY65xEsr',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ricardo-sesame-street-small.mp4 - Subclip',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Sep 28 18:40:39 2017',
      'image_uid': 'INy4ZhWIH9BK',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4U3sY65xEsr/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/INy4ZhWIH9BK.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1506618173,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U6Th1xwZriHj',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/zh_subtitles/file'
      },
      'uid': 'U6Th1xwZriHj',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ricardo-sesame-street-small.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Sep 28 17:02:53 2017',
      'image_uid': 'Ihw67duXR19c',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6Th1xwZriHj/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Ihw67duXR19c.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/vr_assets_1/file',
        'public_url': 'https://e568a75e25d3a840ce6c-2f4e5dc3cafe1263ca1d4834a006c689.ssl.cf1.rackcdn.com/UyWAE5AgUb60/vr_assets_1/FUSNvymJfRBO-assets3.zip',
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1505745129,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UyWAE5AgUb60',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/zh_subtitles/file'
      },
      'uid': 'UyWAE5AgUb60',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/vr_timestamps_1/file',
        'public_url': 'https://e568a75e25d3a840ce6c-2f4e5dc3cafe1263ca1d4834a006c689.ssl.cf1.rackcdn.com/UyWAE5AgUb60/vr_timestamps_1/F0lcemLZlU6B-timestamps_video_1.json',
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'London Park Ducks Swans.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Mon Sep 18 14:32:09 2017',
      'image_uid': 'IIqVh6N9KzhS',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UyWAE5AgUb60/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IIqVh6N9KzhS.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': 'video_1',
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/vr_assets_1/file',
        'public_url': 'https://e568a75e25d3a840ce6c-2f4e5dc3cafe1263ca1d4834a006c689.ssl.cf1.rackcdn.com/UK5EabNVgIpM/vr_assets_1/FkQ8CGaZG18u-assets3.zip',
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1505427477,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UK5EabNVgIpM',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/zh_subtitles/file'
      },
      'uid': 'UK5EabNVgIpM',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/vr_timestamps_1/file',
        'public_url': 'https://e568a75e25d3a840ce6c-2f4e5dc3cafe1263ca1d4834a006c689.ssl.cf1.rackcdn.com/UK5EabNVgIpM/vr_timestamps_1/F61lJwPliEM5-timestamps_video_2_4.json',
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Crystal Shower Falls',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Sep 14 22:17:57 2017',
      'image_uid': 'Ic8HWpaLKoH1',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5EabNVgIpM/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Ic8HWpaLKoH1.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': 'video_2',
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1504724368,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UMXYjS1uvp7P',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/zh_subtitles/file'
      },
      'uid': 'UMXYjS1uvp7P',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ThDfc6XJHLva',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Sep  6 18:59:28 2017',
      'image_uid': 'Ing5zKRc8oJE',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UMXYjS1uvp7P/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Ing5zKRc8oJE.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1503417411,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U6gbgWQy4Cqs',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/zh_subtitles/file'
      },
      'uid': 'U6gbgWQy4Cqs',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'VID_20150129_140203.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Aug 22 15:56:51 2017',
      'image_uid': 'I3qLzSPqwuO8',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U6gbgWQy4Cqs/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I3qLzSPqwuO8.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1502994405,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UWGZ1ahaXpFG',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/zh_subtitles/file'
      },
      'uid': 'UWGZ1ahaXpFG',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'happy.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Aug 17 18:26:45 2017',
      'image_uid': 'IeGnUr8vOuzT',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UWGZ1ahaXpFG/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IeGnUr8vOuzT.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1502814633,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UGJRoJKjTOMJ',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/zh_subtitles/file'
      },
      'uid': 'UGJRoJKjTOMJ',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ThDfc6XJHLva.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Aug 15 16:30:33 2017',
      'image_uid': 'IlCtznowdLsl',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGJRoJKjTOMJ/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IlCtznowdLsl.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1502481288,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UYtjDQkCh1uS',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/zh_subtitles/file'
      },
      'uid': 'UYtjDQkCh1uS',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'website_960x540.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Fri Aug 11 19:54:48 2017',
      'image_uid': 'INkmHksss2ZF',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UYtjDQkCh1uS/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/INkmHksss2ZF.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1502388805,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UzMPM39oSYTN',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/zh_subtitles/file'
      },
      'uid': 'UzMPM39oSYTN',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'AaDeGOLstPI2-Clip8.movSubclip.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Aug 10 18:13:25 2017',
      'image_uid': 'ItDCPdNKUT1g',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UzMPM39oSYTN/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/ItDCPdNKUT1g.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1501795953,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UmfWMmsAuw5o',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/zh_subtitles/file'
      },
      'uid': 'UmfWMmsAuw5o',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'VID_20150129_140203.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Aug  3 21:32:33 2017',
      'image_uid': 'IiD0328Le083',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UmfWMmsAuw5o/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IiD0328Le083.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1501789548,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UZmoT7MHei9E',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/zh_subtitles/file'
      },
      'uid': 'UZmoT7MHei9E',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'AaDeGOLstPI2-Clip8.movSubclip.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Aug  3 19:45:48 2017',
      'image_uid': 'ID5MfuHGzVQ1',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UZmoT7MHei9E/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/ID5MfuHGzVQ1.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1501789490,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U72chcskWUE1',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/zh_subtitles/file'
      },
      'uid': 'U72chcskWUE1',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': '10009-12.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Aug  3 19:44:50 2017',
      'image_uid': 'Ij2mc9CLjKi7',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U72chcskWUE1/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Ij2mc9CLjKi7.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1501782928,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U0I6YHvQCVrC',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/zh_subtitles/file'
      },
      'uid': 'U0I6YHvQCVrC',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'speech-transcription.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Aug  3 17:55:28 2017',
      'image_uid': 'IGw4jO9ZpYTD',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U0I6YHvQCVrC/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IGw4jO9ZpYTD.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1501772616,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UJUaNPenxA2X',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/zh_subtitles/file'
      },
      'uid': 'UJUaNPenxA2X',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ThDfc6XJHLva.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Thu Aug  3 15:03:36 2017',
      'image_uid': 'Iltp11XjbQf5',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJUaNPenxA2X/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Iltp11XjbQf5.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/vr_assets_1/file',
        'public_url': 'https://e568a75e25d3a840ce6c-2f4e5dc3cafe1263ca1d4834a006c689.ssl.cf1.rackcdn.com/UAsQ7YvuDvvp/vr_assets_1/FqKc253GmSmd-assets3.zip',
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1501603510,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UAsQ7YvuDvvp',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/zh_subtitles/file'
      },
      'uid': 'UAsQ7YvuDvvp',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/vr_timestamps_1/file',
        'public_url': 'https://e568a75e25d3a840ce6c-2f4e5dc3cafe1263ca1d4834a006c689.ssl.cf1.rackcdn.com/UAsQ7YvuDvvp/vr_timestamps_1/FnKCRmecCWqL-timestamps.json',
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Pebbly Beach Headland.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Aug  1 16:05:10 2017',
      'image_uid': 'IjH909zie3eu',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UAsQ7YvuDvvp/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IjH909zie3eu.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1501523102,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UQnVTeyvWTbb',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/zh_subtitles/file'
      },
      'uid': 'UQnVTeyvWTbb',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'fireflies.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Mon Jul 31 17:45:02 2017',
      'image_uid': 'INb6JrmomAlT',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UQnVTeyvWTbb/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/INb6JrmomAlT.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1499884905,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U7aGE9gO1oMN',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/zh_subtitles/file'
      },
      'uid': 'U7aGE9gO1oMN',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ThDfc6XJHLva.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Jul 12 18:41:45 2017',
      'image_uid': 'IukI64Re5DGn',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U7aGE9gO1oMN/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IukI64Re5DGn.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1499789350,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UK5RjP7OxGI3',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/zh_subtitles/file'
      },
      'uid': 'UK5RjP7OxGI3',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'cap test',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Jul 11 16:09:10 2017',
      'image_uid': 'IGWLEM6h0zRa',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UK5RjP7OxGI3/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IGWLEM6h0zRa.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1499789270,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UEBgmQ5aLgj6',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/zh_subtitles/file'
      },
      'uid': 'UEBgmQ5aLgj6',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'new',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Jul 11 16:07:50 2017',
      'image_uid': 'IZILOdHQNL2R',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UEBgmQ5aLgj6/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IZILOdHQNL2R.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1498663638,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/Uqp7JgEobfrh',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/zh_subtitles/file'
      },
      'uid': 'Uqp7JgEobfrh',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'AaDeGOLstPI2-Clip8.movSubclip.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Jun 28 15:27:18 2017',
      'image_uid': 'I1G17bZ0o4r5',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Uqp7JgEobfrh/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I1G17bZ0o4r5.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1498663638,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UvkBjyzeB8PC',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/zh_subtitles/file'
      },
      'uid': 'UvkBjyzeB8PC',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'Clip #3.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Jun 28 15:27:18 2017',
      'image_uid': 'Io0sr3WON83Q',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UvkBjyzeB8PC/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/Io0sr3WON83Q.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1498663638,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UcBKHQnuSuuS',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/zh_subtitles/file'
      },
      'uid': 'UcBKHQnuSuuS',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'VID_20151030_091931.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Jun 28 15:27:18 2017',
      'image_uid': 'IYMI69zqyaI3',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UcBKHQnuSuuS/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IYMI69zqyaI3.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1498663638,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UGL3cwtwtiXp',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/zh_subtitles/file'
      },
      'uid': 'UGL3cwtwtiXp',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'uStudio-CES.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Jun 28 15:27:18 2017',
      'image_uid': 'IlfQYihXzpRq',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UGL3cwtwtiXp/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IlfQYihXzpRq.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1498662774,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/U4BMp5FABY5C',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/zh_subtitles/file'
      },
      'uid': 'U4BMp5FABY5C',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': '1 Clip #11.mov',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Wed Jun 28 15:12:54 2017',
      'image_uid': 'IoLrB0A3KDe5',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/U4BMp5FABY5C/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IoLrB0A3KDe5.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1498600198,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/UJkNLU8MsYc0',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/zh_subtitles/file'
      },
      'uid': 'UJkNLU8MsYc0',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'ThDfc6XJHLva.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Jun 27 21:49:58 2017',
      'image_uid': 'IYQk6xGMpyEb',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/UJkNLU8MsYc0/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/IYQk6xGMpyEb.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    },
    {
      'status': 'inspect_succeeded',
      'production_notes': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/production_notes/file'
      },
      'description': '',
      'video_url': '/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD',
      'web_page': '',
      'subclips_url': '/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/subclips',
      'facebook_url': null,
      'vr_assets_1': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/vr_assets_1/file'
      },
      'zh_traditional_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/zh_traditional_subtitles/file'
      },
      'public_text': null,
      'created_timestamp': 1498600198,
      'youtube_id': null,
      'playground_url': 'https://stage-playground.studionodes.net/players/O33aaOs3kBlj/Ue5kxukiaEBD',
      'nl_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/nl_subtitles/file'
      },
      'integer_test': null,
      'image_upload_url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/image',
      'keywords': [],
      'video_template_tag': 'standard',
      'studio_uid': 'O33aaOs3kBlj',
      'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/asset',
      'zh_subtitles': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/zh_subtitles/file'
      },
      'uid': 'Ue5kxukiaEBD',
      'category': 'entertainment',
      'vr_timestamps_1': {
        'upload_url': 'https://stage-upload-app02.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/vr_timestamps_1/file'
      },
      'private_text': null,
      'title': 'VID_20151030_091931.mp4',
      'fields': [
        {
          'uid': 'public_text',
          'searchable': false,
          'label': 'Public Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/public_text',
          'created': 1418325859.587353,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'private_text',
          'searchable': false,
          'label': 'Private Text Field',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/private_text',
          'created': 1418325880.093879,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'production_notes',
          'searchable': false,
          'label': 'Production Notes PDF',
          'help': 'These notes accompany the big company announcement video',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/production_notes',
          'created': 1430340554.896048,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'enum_field',
          'searchable': false,
          'label': 'Enumeration Field',
          'help': '',
          'default_value': 'v2',
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/enum_field',
          'created': 1435266981.395752,
          'public': false,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'v1',
                'label': 'Value 1'
              },
              {
                'value': 'v2',
                'label': 'Value 2'
              }
            ]
          }
        },
        {
          'uid': 'video_category',
          'searchable': false,
          'label': 'Video category',
          'help': 'Select a category for this video',
          'default_value': null,
          'type_uid': 'enumeration',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/video_category',
          'created': 1435677598.951273,
          'public': true,
          'hidden': false,
          'options': {
            'allowed_values': [
              {
                'value': 'sports',
                'label': 'Sports'
              },
              {
                'value': 'food_and_drink',
                'label': 'Food and Drink'
              }
            ]
          }
        },
        {
          'uid': 'youtube_id',
          'searchable': false,
          'label': 'Youtube ID',
          'help': 'Youtube ID for Youtube player module',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/youtube_id',
          'created': 1437491741.278062,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'awesome_video',
          'searchable': false,
          'label': 'Awesome Video?',
          'help': '',
          'default_value': null,
          'type_uid': 'boolean',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/awesome_video',
          'created': 1445893600.444784,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'integer_test',
          'searchable': false,
          'label': 'Integer Test',
          'help': 'whatever',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/integer_test',
          'created': 1446143824.156469,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_color_field',
          'searchable': false,
          'label': 'Test Color',
          'help': '',
          'default_value': null,
          'type_uid': 'color',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_color_field',
          'created': 1446478452.176122,
          'public': false,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'test_integer_field',
          'searchable': false,
          'label': 'field type test',
          'help': 'no help',
          'default_value': null,
          'type_uid': 'integer',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/test_integer_field',
          'created': 1446754892.487245,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'fr_subtitles',
          'searchable': false,
          'label': 'French Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/fr_subtitles',
          'created': 1493918254.659093,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'es_subtitles',
          'searchable': false,
          'label': 'Spanish Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/es_subtitles',
          'created': 1493918261.334211,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'nl_subtitles',
          'searchable': false,
          'label': 'Dutch Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/nl_subtitles',
          'created': 1493919559.133664,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_traditional_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_traditional_subtitles',
          'created': 1494270875.449177,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'zh_subtitles',
          'searchable': false,
          'label': 'Chinese Subtitles (other)',
          'help': '',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/zh_subtitles',
          'created': 1494270910.183643,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_timestamps_1',
          'searchable': false,
          'label': 'VR Timestamps',
          'help': 'Timestamps to jump and other options',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_timestamps_1',
          'created': 1502906081.986632,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_assets_1',
          'searchable': false,
          'label': 'VR Assets',
          'help': '3D models and images',
          'default_value': null,
          'type_uid': 'file',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_assets_1',
          'created': 1503609811.660711,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'vr_video_id',
          'searchable': false,
          'label': 'VR Id',
          'help': 'Use this id to reference other video in the timestamps json file of this video',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/vr_video_id',
          'created': 1505838062.187235,
          'public': true,
          'hidden': false,
          'options': {}
        },
        {
          'uid': 'facebook_url',
          'searchable': false,
          'label': 'Facebook Video URL',
          'help': '',
          'default_value': null,
          'type_uid': 'text',
          'url': 'https://eastwood.studionodes.net/api/v2/studios/O33aaOs3kBlj/video_fields/facebook_url',
          'created': 1509567057.563742,
          'public': true,
          'hidden': false,
          'options': {}
        }
      ],
      'notes': '',
      'created': 'Tue Jun 27 21:49:58 2017',
      'image_uid': 'I21ZfQTM2t96',
      'fr_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/fr_subtitles/file'
      },
      'shares_url': '/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/shares',
      'test_color_field': null,
      'es_subtitles': {
        'upload_url': 'https://stage-upload-app01.studionodes.net/api/v2/studios/O33aaOs3kBlj/videos/Ue5kxukiaEBD/es_subtitles/file'
      },
      'image_url': 'https://2b56b2d7ce685d9c9d45-9d9f55e29c493c4cc73b398de368f388.ssl.cf1.rackcdn.com/I21ZfQTM2t96.jpg',
      'video_template_uid': 'CTIA6qEH0RFH',
      'awesome_video': null,
      'video_category': null,
      'enum_field': 'v2',
      'vr_video_id': null,
      'test_integer_field': null
    }
  ]
};

export default data;
