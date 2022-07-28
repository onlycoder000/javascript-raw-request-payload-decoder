var postedString = decodeURIComponent(String.fromCharCode.apply(null,
                new Uint8Array(details.requestBody.raw[0].bytes)));
