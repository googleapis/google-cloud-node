#[tokio::main]
async fn main() {
    let provider = gcp_auth::provider().await.unwrap();
    let token = provider.token(&["https://www.googleapis.com/auth/spanner.data"]).await.unwrap();
    println!("{}", token.as_str());
}
