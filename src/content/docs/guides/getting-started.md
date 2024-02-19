---
title: Getting started
description: A guide to get started with Strintale
---

You're looking to integrate Stringtale into your (existing) project? You've come to the right place! This guide will lead
you through the required steps and get you up and running in minutes.

## Integrating Stringtale into your project

Whether you're integrating Stringtale into a new project or an existing one, the steps are the same.

0. First run `npm install --dev @stringtale/cli` / `yarn add --dev @stringtale/cli` to install our CLI.
1. Login using `stringtale login`
2. Run `stringtale init` => Either select a project or create a new one => Give it a name in case of a new one
3. Stringtale CLI creates a project on your behalf (if needed) and returns the STRINGTALE_PROJECT_ID for you to add to your .env
4. Stringtale CLI offers to automatically wrap your text in <Value> tags where possible?
5. Try it out by adding ?stringtale to your application's URL and watch the magic happen

## Getting live edit to your clients 
1. Create a deploy key for your project on the stringtale website
2. Deploy your preview environment and add the STRINGTALE_API_KEY environment variable along with your deploy key
3. Go to your website's preview environment and enable the capabilities using ?stringtale or our Chrome Extension.