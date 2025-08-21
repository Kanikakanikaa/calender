#!/bin/sh
# shellcheck shell=sh

if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $*"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ ! -d .git ]; then
    debug ".git directory not found, skipping hook"
    exit 0
  fi

  if command -v npx > /dev/null 2>&1; then
    debug "running npx --no-install husky-run $hook_name"
    npx --no-install husky-run "$hook_name" "$@"
  else
    echo "can't find npx in PATH"
    exit 127
  fi
fi
