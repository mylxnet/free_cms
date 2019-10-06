package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"regexp"
	"strings"
)

func main() {
	r, _ := http.Get("https://read.qidian.com/chapter/ZpkKJq_I2o_mkXioLmMPXw2/bnpqqn1cUUDwrjbX3WA1AA2")

	b, _ := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	s := strings.Replace(string(b), "。", "\r\n", -1)
	s = strings.Replace(s, "<p>", "", -1)
	s = strings.Replace(s, "</p>", "", -1)
	reg := regexp.MustCompile(`(?s)read-content(.*)admire-wrap`)
	s2 := reg.FindAllString(s, -1)
	fmt.Println(s2[0])
}
