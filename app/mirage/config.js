export default function() {
  this.namespace = '/';
  this.get('/issues', function() {
    return {
      issues: [{
        "id":142787,
        "project":{
              "id":434,
              "name":"Vacate"
           },
        "tracker":{
              "id":1,
              "name":"Bugs"
           },
        "status":{
              "id":2,
              "name":"Assigned"
           },
        "priority":{
              "id":4,
              "name":"3 - Normal"
           },
        "author":{
              "id":10506,
              "name":"Alex Du"
           },
        "assigned_to":{
              "id":10506,
              "name":"Alex Du"
           },
        "fixed_version":{
              "id":1616,
              "name":"3.1.0"
           },
        "subject":"resume under retry mode will begin from first hashspace",
        "description":"Under retry mode, if resume command coming, the vacate will be run from first hashspace",
        "start_date":"2016-02-17"
      },
      {
        "id":142786,
        "project":{
            "id":287,
            "name":"Business Intelligence"
           },
        "tracker":{
            "id":4,
            "name":"Tasks"
           },
        "status":{
            "id":1,
            "name":"New"
           },
        "priority":{
            "id":4,
            "name":"3 - Normal"
            },
        "author":{
            "id":10526,
            "name":"Sravanth Gutta"
           },
        "category":{
            "id":239,
            "name":"Sales"
           },
        "fixed_version":{
            "id":246,
            "name":"New Requests"
           },
        "subject":"Daily Partner Seats Report Issue",
        "description":"Guys\r\n\r\nI was just reviewing the attached report and in particular looking at the side bar “Current Snapshot”.\r\n\r\nI am not at all sure what the parameters of that side bar are? As I understand it this report records every partner that has over 1000 “paid seats”. The “Daily New Seats (trailing 7 days) records only those partners who have added paid seat licenses in the past 7 days. So logic says the left hand side bar, being cumulative may have legacy or less active accounts in it. It seems to be organised in alphabetical partner name order, however, newer accounts : like Crosslinks, Mindshift don’t seem to have been added to the side bar and there are also a number of older accounts like Time Warner and  Apptix that are missing. \r\n\r\nDo we know what is going on here?\r\n\r\nThanks\r\n\r\nSimon\r\n",
        "start_date":"2016-02-17"},
        {
           "id":142785,
           "project":{
              "id":287,
              "name":"Business Intelligence"
           },
           "tracker":{
              "id":4,
              "name":"Tasks"
           },
           "status":{
              "id":1,
              "name":"New"
           },
           "priority":{
              "id":4,
              "name":"3 - Normal"
           },
           "author":{
              "id":10705,
              "name":"Rama Pilli"
           },
           "assigned_to":{
              "id":10705,
              "name":"Rama Pilli"
           },
           "category":{
              "id":247,
              "name":"BI Internal"
           },
           "fixed_version":{
              "id":246,
              "name":"New Requests"
           },
           "subject":"Rewrite OnCall Scheduler",
           "description":"Current Oncall scheduler was designed based on Google XML Feed API,\r\nGoogle stopped this service and support. So we have to work on creating another package with other possible options.\r\nUntil then, to stop unnecessary notifications, I am disabling  the Oncallscheduler Job.",
           "start_date":"2016-02-17"}]};
  });
  this.get('/projects', function() {
    this.namespace = '/';
    return {"projects":[{"id":519,"name":"DPC Engineering","identifier":"dpceng","description":"Engineering's DPC projects","status":1,"is_public":true,"created_on":"2014-08-12T22:31:37Z","updated_on":"2015-07-31T17:37:51Z"},{"id":566,"name":"Deploy Requests","identifier":"dpcchange","description":"{{include(Wiki)}}","parent":{"id":519,"name":"DPC Engineering"},"status":1,"is_public":true,"created_on":"2014-12-15T17:02:37Z","updated_on":"2015-07-20T17:16:16Z"},{"id":187,"name":"Programs","identifier":"programs","description":"Mozy Programs\r\n\r\n\r\n\r\n\"Scrum Management\":https://redmine.mozy.lab.emc.com/projects/programs/wiki/scrum","status":1,"is_public":true,"created_on":"2011-11-21T23:39:36Z","updated_on":"2013-03-07T21:32:09Z"},{"id":372,"name":"Active Programs","identifier":"activeprograms","description":"Programs under current development.","parent":{"id":187,"name":"Programs"},"status":1,"is_public":true,"created_on":"2013-03-07T17:10:13Z","updated_on":"2013-03-07T17:10:13Z"},{"id":456,"name":"API Services","identifier":"apiservices","description":"","parent":{"id":372,"name":"Active Programs"},"status":5,"is_public":true,"created_on":"2014-04-04T15:00:49Z","updated_on":"2014-04-04T15:00:49Z"},{"id":451,"name":"2XNext","identifier":"appliance","description":"This project will track the requirements and progress of Mozy's efforts to be HIPAA compliant.\r\n\r\nDO NOT DELETE :: {BICRAWL=TRUE}","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2014-03-24T16:26:11Z","updated_on":"2014-09-04T16:54:19Z"},{"id":443,"name":"Belgacom","identifier":"belgacom","description":"","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2014-02-06T21:00:51Z","updated_on":"2014-02-06T21:00:51Z"},{"id":369,"name":"Business Trial","identifier":"business_trial","description":"DO NOT DELETE :: {BICRAWL=TRUE}","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2013-02-20T21:26:12Z","updated_on":"2013-03-08T21:44:30Z"},{"id":291,"name":"Data Shuttle","identifier":"datashuttle","description":"","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2012-02-14T18:21:23Z","updated_on":"2012-02-14T18:21:23Z"},{"id":474,"name":"Cloud as a Target","identifier":"harmony","description":"This project will track the requirements and progress of Mozy's efforts to be HIPAA compliant.\r\n\r\nDO NOT DELETE :: {BICRAWL=TRUE}","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2014-04-24T22:07:18Z","updated_on":"2014-09-04T16:54:34Z"},{"id":444,"name":"iTok","identifier":"itok","description":"iTok is a service provider that sells the Mozy backup and sync services through a co-branded offer to smbs and consumers. They also partner with other companies who have large install bases. ","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2014-02-06T21:02:07Z","updated_on":"2014-02-06T21:43:05Z"},{"id":485,"name":"Linux Client Program","identifier":"linuxclient_program","description":"","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2014-06-13T21:01:56Z","updated_on":"2014-06-13T21:01:56Z"},{"id":564,"name":"Mozy Customer Work","identifier":"mozymaintenance","description":"","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2014-12-04T23:55:44Z","updated_on":"2015-01-13T19:41:47Z"},{"id":624,"name":"PCI Compliance","identifier":"pci-compliance","description":"This project will track the tickets and progress of Mozy's efforts to be PCI compliant.","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2015-10-02T05:15:06Z","updated_on":"2015-10-02T16:09:03Z"},{"id":425,"name":"Retirement and Migration","identifier":"retirementandmigration","description":"","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2013-10-29T15:45:34Z","updated_on":"2013-10-29T15:45:34Z"},{"id":514,"name":"CBeyond Migration","identifier":"cbeyondmigration","description":"","parent":{"id":425,"name":"Retirement and Migration"},"status":1,"is_public":true,"created_on":"2014-08-11T19:38:01Z","updated_on":"2014-08-11T19:38:01Z"},{"id":420,"name":"Client Deprecation","identifier":"clientdep","description":"","parent":{"id":425,"name":"Retirement and Migration"},"status":1,"is_public":true,"created_on":"2013-10-04T21:32:06Z","updated_on":"2013-10-04T21:32:06Z"},{"id":435,"name":"Leprecorn","identifier":"leprecorn","description":"","parent":{"id":425,"name":"Retirement and Migration"},"status":1,"is_public":true,"created_on":"2013-12-11T22:05:40Z","updated_on":"2013-12-11T22:05:40Z"},{"id":439,"name":"McAfee Migration","identifier":"mcafeemigration","description":"","parent":{"id":425,"name":"Retirement and Migration"},"status":1,"is_public":true,"created_on":"2014-01-20T22:06:07Z","updated_on":"2014-01-20T22:06:07Z"},{"id":440,"name":"Media Restores","identifier":"media-restores","description":"DO NOT DELETE :: {BICRAWL=TRUE}","parent":{"id":425,"name":"Retirement and Migration"},"status":1,"is_public":true,"created_on":"2014-01-21T21:26:25Z","updated_on":"2014-10-10T22:14:37Z"},{"id":433,"name":"Yanni","identifier":"yanni","description":"","parent":{"id":425,"name":"Retirement and Migration"},"status":1,"is_public":true,"created_on":"2013-12-05T17:39:22Z","updated_on":"2013-12-05T17:39:22Z"},{"id":90,"name":"VMBU for Mozy","identifier":"syzygy","description":"h1. Virtual Machine Backup (VMBU)\r\n\r\n{{js_url('http://code.jquery.com/jquery.min.js')}}\r\n{{js_url('https://redmine.mozy.lab.emc.com/attachments/download/14988/PMO.js')}}\r\n\r\nDO NOT DELETE :: {BICRAWL=TRUE}\r\n|{{sql(select summary as 'Status' from news where title = \"PMO\" and project_id = 90)}}|\r\n|{{sql(select description as 'Notes' from news where title = \"PMO\" and project_id = 90)}}|\r\n\r\nh2. Useful Links\r\n\r\n* \"Media Restores\":https://redmine.mozy.lab.emc.com/projects/syzygy/wiki/MediaRestore\r\n* \"Data Shuttles\":https://redmine.mozy.lab.emc.com/projects/datashuttle/wiki/DS_10_ComponentsStatus","parent":{"id":372,"name":"Active Programs"},"status":1,"is_public":true,"created_on":"2011-10-10T15:18:17Z","updated_on":"2014-09-08T16:54:57Z"},{"id":373,"name":"Backlog","identifier":"programbacklog","description":"Backlog of programs.","parent":{"id":187,"name":"Programs"},"status":1,"is_public":true,"created_on":"2013-03-07T17:11:27Z","updated_on":"2013-03-07T17:11:27Z"},{"id":181,"name":"Admin Console 2.0","identifier":"admin-console","description":"Admin 2.0 introduces a new administrative experience for each business segment (Customer-Centric Administration), simplifying the most common activities while allowing businesses to leverage investments made in analogous technologies that can integrate with Mozy to give customers the tools they need to set-up and manage the Mozy service alongside other systems within their businesses. The project scope includes or depends on:\r\n\r\n* Re-architecting the admin console\r\n* UI overhaul\r\n* Storage pooling\r\n* Auditing functionality\r\n* API updates\r\n\r\nThere is a separate product definition for each customer/stakeholder.","parent":{"id":373,"name":"Backlog"},"status":1,"is_public":true,"created_on":"2011-11-17T22:01:33Z","updated_on":"2011-12-19T16:23:25Z"},{"id":183,"name":"Enterprise Admin Console","identifier":"admin-enterprise","description":"We are updating our high-end admin console to better meet the needs of our largest customers.","parent":{"id":181,"name":"Admin Console 2.0"},"status":1,"is_public":true,"created_on":"2011-11-17T22:21:21Z","updated_on":"2011-12-19T16:19:40Z"}],"total_count":343,"offset":0,"limit":25}
  });
}