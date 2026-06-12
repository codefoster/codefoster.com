---
title: Fetch Azure FTP Credentials from the CLI
categories: [Azure]
tags: [cli, az]
date: 2019-06-24
---

This is one of those posts I'm writing for future me (hi, future me!).

If you have an Azure Web App and you want to get its _application_-level deployment credentials (as opposed to its user-level deployment credentials), you need to run two commands using the Azure CLI:

``` bash
# to get the FTP endpoint
az webapp show -g <resource group> -n <app name> --query ftpPublishingUrl

# to get your credentials
az webapp deployment list-publishing-credentials -n <app name> -g <resource group> --query '{name:name, publishingUserName:publishingUserName, publishingPassword:publishingPassword}'
```

The second command will give you the three components you need for your username and password credentials. You use the `name` and `publishingUserName` together to make your username - like this `${name}\${publishingUserName}` in JavaScript template literal syntax, and you use the `publishingPassword` as the password.

That's that!