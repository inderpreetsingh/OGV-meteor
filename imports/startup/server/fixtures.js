/*                F I X T U R E S . J S
 * BRL-CAD
 *
 * Copyright (c) 1995-2013 United States Government as represented by
 * the U.S. Army Research Laboratory.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public License
 * version 2.1 as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this file; see the file named COPYING for more
 * information.
 */

/**
 * This file contains inital settings that are entered into database
 * during the first installation of the software
 */
if (OgvSettings.find().count() === 0) {
  // Fetch fixtures data from settings.json
  const { fixtures } = Meteor.settings.public;
  const {
    settingSwitch,
    siteName,
    gobjPath,
    mgedPath,
    mailUrl,
    landingPageModel
  } = fixtures;

  // Insert fixtures into database when there is no data in the database
  OgvSettings.insert({
    settingSwitch,
    siteName,
    mailUrl,
    gobjPath,
    mgedPath,
    landingPageModel
  });
}
