---
layout: page
title: Desktop Installation
path: /install/desktop
nav_order: 1
group: Installation
---

## [OWASP](https://www.owasp.org) Threat Dragon

[Threat Dragon](http://owasp.org/www-project-threat-dragon) comes in two variants, a desktop application and a web application.

## Desktop application install instructions
Installable versions are available for download from the [OWASP GitHub area](https://github.com/OWASP/threat-dragon/releases):

* Windows (64 bit) installer
* MacOS installer
* Linux snap, AppImage, debian and rpm installers

### Linux installer and AppImage
Packages for both Debian and Fedora Linux on AMD64 and X86-64bit platforms can be downloaded from the
[releases folder](https://github.com/OWASP/threat-dragon/releases/).
Alternatively a platform independent snap installer can be downloaded, or use the AppImage provided.

### MacOS installer
Download the .dmg MacOS installer from the
[releases folder](https://github.com/OWASP/threat-dragon/releases/).
Open the download and drag 'OWASP Threat  Dragon' to the application directory. When the copy has
finished then Threat  Dragon can be run from launchpad or from Finder -> Applications.

### Windows installer
Download the Windows .exe installer from the
[releases folder](https://github.com/OWASP/threat-dragon/releases/).
Run the installer and invoke the application from the shortcut.

### Command line using npm

For the latest versions of code between releases, `npm` can be used to install and run Threat Dragon locally:

`git clone https://github.com/owasp/threat-dragon`

`cd td.desktop`

`npm install`

Then to run it:

`npm run start`

There is a limited command line interface, with help:

`npm run help`

For example to export a given threat model file to pdf :

`npm run pdf ./threat-model.json`
