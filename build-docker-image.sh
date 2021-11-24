#!/bin/bash
docker build -t 'lexmlbr/jsonix-lexml:1.0.0' .
if [[ "$1" == "publish" ]] ; then
	docker push 'lexmlbr/jsonix-lexml:1.0.0' 
fi	
