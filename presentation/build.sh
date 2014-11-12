#!/bin/bash

templ=$(<src/presentation.html.tpl)
value=$(<src/presentation.md)
echo "${templ//___PLACEHOLDER___/$value}" > presentation.html

