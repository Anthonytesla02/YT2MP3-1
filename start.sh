#!/bin/bash

# Start API server in background
cd /home/runner/workspace/api && npm start &

# Wait a moment for API to start
sleep 2

# Start React frontend
cd /home/runner/workspace/client && npm start
